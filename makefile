build:
	docker build -t $(USER)/nodejs_experiment .

run: build
	docker run -p 49100:3000 -d $(USER)/nodejs_experiment
	@echo "port: localhost:49100"
