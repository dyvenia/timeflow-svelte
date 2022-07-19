docker build . -f backend/Dockerfile -t fastapi:v1
docker build --no-cache ./frontend -f frontend/Dockerfile -t sveltekit-docker:latest