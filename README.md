# check-name
Simplest, cheapest and easiest API to check if there is a correct first name in a string

# Introduction

If you are creating chatbots probably you have already asked the name of some user. For instance:

```md
**Bot:** Hi there, what is your name?  
*User:* Rafael Pacheco  
**Bot:** Welcome, Rafael Pacheco. I'm very happy to talk if you.  

Result: 😀👍
```

Note that in this sample the Bot use the user input believing that it's a real and valid name.
However, if the user sends some different than a name the result can be terrible, as shown below:

```md
**Bot:** Hi there, what is your name?  
*User:* go F#%K yourself  
**Bot:** Welcome, go F#%K yourself. I'm very happy to talk if you.  

Result: 😔👎
```

This API was built in order to verify if there is a correct name in a string.

# How to use

Base URL for all endpoints
`https://cat-fact.herokuapp.com`

*The response time will likely be a few seconds long on the first request, because this app is running on a free Heroku dyno. Subsequent requests will behave as normal.*

## Endpoints
[`/verify`](docs/verify.md)
Retrieve the analyze about some name.

---

By the way, this project is based on the last [Brazillian Censo](https://censo2010.ibge.gov.br/) (2010), there are more than 130,000 different first names of people in Brazil. 
The [IBGE](https://www.ibge.gov.br/) is the government institute responsible for this research. [Click here](https://censo2010.ibge.gov.br/nomes) if you want to get all the research database. There is also a 

**Note:** This API should work for any valid Brazillian name of a person that has been born until 2010. However, if by some reason it doesn't work properly please submit the name using this endpoint.

# Future work

- [ ] Add names from other languages.
- [ ] Suggest similar names.
- [ ] Add names information about frequence rate, popularity, and rank.