# Jenkins (Multibranch) setup - Exposicion-Github

This repo is a Node.js (Express) project with Jest tests.

## What the Jenkins pipeline does
- npm ci
- npm test
- builds a static preview folder (preview/) so you can SEE UI changes inside Jenkins (HTML Report)

## Requirements in Jenkins
Plugins:
- Pipeline
- Git
- NodeJS
- HTML Publisher

Tools:
- NodeJS installation named: node20 (Node 20.x)

## Recommended job type
Create a "Multibranch Pipeline" so each student branch builds automatically.

Trigger:
- Scan Multibranch Pipeline Triggers -> periodically (1 minute) for classroom demo.

## Where to see the UI
Open the build -> left menu -> "Preview (Static)"
