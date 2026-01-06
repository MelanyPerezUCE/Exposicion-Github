pipeline {
  agent any

  environment {
    CI = 'true'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        sh 'node -v'
        sh 'npm -v'
        sh 'npm ci'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint --if-present'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test --if-present'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build --if-present'
      }
    }

    stage('Generate Preview') {
      steps {
        sh '''
          mkdir -p preview

          # Si existe un HTML principal, úsalo para preview:
          if [ -f "views/index.html" ]; then
            cp views/index.html preview/index.html
          elif [ -f "public/index.html" ]; then
            cp public/index.html preview/index.html
          elif [ -f "dist/index.html" ]; then
            cp dist/index.html preview/index.html
          else
            # Si no hay frontend estático, genera un HTML simple para la demo
            cat > preview/index.html <<'HTML'
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Jenkins Preview</title>
</head>
<body style="font-family: Arial, sans-serif; padding: 24px;">
  <h1>Build OK ✅</h1>
  <p>Este preview se generó automáticamente desde Jenkins.</p>
  <p>Si cambias un archivo y haces push a la rama <b>jenkins</b>, este HTML se vuelve a publicar.</p>
</body>
</html>
HTML
          fi
        '''
      }
    }

    stage('Publish Preview') {
      steps {
        publishHTML(target: [
          reportName: 'Preview (Jenkins)',
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
      // No fallar si no existen dist/build/preview en builds que mueren temprano
      archiveArtifacts artifacts: 'preview/**,dist/**,build/**', allowEmptyArchive: true
    }
  }
}
