## `suggest` endpoint

### Suggest a new valid name

Send a new name to be approval.

### Endpoint
`POST /suggest/`

##### Body object properties

| Property   | Type                   | Sample | Description |
| ----------- | ---------------------- | ------- | ----------- |
| name | String | 'Rafael Pacheco'   |       | The name (or string) to be verified |

##### Example request
```http
POST /verify/  
Content-Type: application/json

{ 
    "name": "Turing"
}
```

##### Example response
```
200 OK
```