pipeline {
  agent any

  options {
    timestamps()
  }

  tools {
    nodejs 'node20'
  }

  environment {
    CI = 'true'
  }

  stages {
    stage('Checkout') {
      steps {
        // Multibranch usually checks out automatically, but this keeps it explicit.
        checkout scm
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Run tests') {
      steps {
        sh 'npm test'
      }
    }

    stage('Build static preview (for Jenkins UI)') {
      steps {
        sh '''
          rm -rf preview
          mkdir -p preview/css preview/js

          # Copy assets
          if [ -d css ]; then cp -r css/* preview/css/; fi
          if [ -d js ]; then cp -r js/* preview/js/; fi

          # Copy HTML pages (flatten into preview root)
          if [ -d views ]; then cp -r views/*.html preview/; fi

          # Rewrite absolute paths to relative paths so it works inside Jenkins HTML Report
          # /css/...  -> css/...
          # /js/...   -> js/...
          find preview -name "*.html" -print0 | xargs -0 sed -i             -e 's|href="/css/|href="css/|g'             -e 's|src="/js/|src="js/|g'

          # Rewrite Express routes to local HTML files for navigation in preview
          find preview -name "*.html" -print0 | xargs -0 sed -i             -e "s|window.location.href='/Crear'|window.location.href='crear.html'|g"             -e "s|window.location.href='/Leer'|window.location.href='leer.html'|g"             -e "s|window.location.href='/Actualizar'|window.location.href='actualizar.html'|g"             -e "s|window.location.href='/Index'|window.location.href='index.html'|g"
        '''
      }
    }

    stage('Publish preview in Jenkins') {
      steps {
        publishHTML(target: [
          reportName: 'Preview (Static)',
          reportDir: 'preview',
          reportFiles: 'index.html',
          keepAll: true,
          alwaysLinkToLastBuild: true,
          allowMissing: false
        ])
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'preview/**', fingerprint: true
    }
  }
}
