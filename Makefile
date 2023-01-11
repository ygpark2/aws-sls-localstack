.PHONY: create-application

create-application:
	curl -d "@data/test/createApplication.json" -X POST http://localhost:4000/application

get-application:
	curl -X GET http://localhost:4000/config/${appId}

delete-application:
	curl -d "@data/test/deleteApplication.json" -X DELETE http://localhost:4000/application

create-environment:
	curl -d "@data/test/createEnvironment.json" -X POST http://localhost:4000/environment

get-environment:
	curl -X GET http://localhost:4000/config/${appId}/${envId}

delete-environment:
	curl -d "@data/test/deleteEnvironment.json" -X DELETE http://localhost:4000/environment