## chatio

### Docker containers and microservice details

-  **chat_io_node** 
	- Web application to serve websocket chat and frontend client
	- ***Language:** EcmaScript6*
	- ***Techs:** Node + SocketIO + ExpressJS + Mongoose*

-  **chat_io_mongo** 
	- Database to save chat conversations
	- ***Works with:** ./db/*
	- ***Techs:** MongoDB*

---

### Setting up and running
#### Docker build and init containers
```docker-compose up```

*This may take a bit, regarding dependencies downloading, etc.*

#### Navigate
*Once containers are running, enter*
```http://localhost:6860```
