## `verify` endpoints

### Verify a name

Retrieve the analyze about some name.

##### Endpoint
`GET /verify/:name`

##### Url parameters

| Parameter   | Type                   | Sample | Description |
| ----------- | ---------------------- | ------- | ----------- |
| name | String | 'Rafael Pacheco'   |       | The name (or string) to be verified |

##### Example request
`GET /verify/Rafael Pacheco`

##### Example response
```
{
    "name": "Rafael Pacheco",
    "score": 1,
    "namesFound": ["Rafael", "Pacheco"]
}
```

---

### Endpoint
`POST /verify/`

##### Body object properties

| Property   | Type                   | Sample | Description |
| ----------- | ---------------------- | ------- | ----------- |
| name | String | 'Rafael Pacheco'   |       | The name (or string) to be verified |

##### Example request

```http
POST /verify/  
Content-Type: application/json

{
    "name": "Rafael Pacheco"
}
```

##### Example response
```
{
    "name": "Rafael XXXX",
    "score": 0.5,
    "namesFound": ["Rafael"]
}
```

### Response

All properties of a response object are explained below

| Property   | Type                   | Description |
| ----------- | ---------------------- | ----------- |
| name | String | The name (or string) sent to be verified |
| namesFound | Array<String> | All names found in the string sent to be verified |
| score | Float | Occurrence rate of names in the string sent to be verified. ( Number of names found / Number of words in name string ) |