pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/your-username/your-repo.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building...'
                // Add build commands here (e.g., mvn install, npm install)
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add test commands (e.g., npm test, pytest)
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Add deploy steps (e.g., copy files, trigger deploy script)
            }
        }
    }
}
