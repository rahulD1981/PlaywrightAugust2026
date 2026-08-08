pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: 'refs/heads/main']], userRemoteConfigs: [[url: 'https://github.com/rahulD1981/PlaywrightAugust2026.git']]])
            }
        }
        stage('Env Setup') {
            steps {
                bat 'call "%WORKSPACE%\\env_setup.bat"'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'allure-report/**', allowEmptyArchive: true
        }
    }
}
