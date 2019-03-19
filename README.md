# check-name
Simplest, cheapest and easiest API to check if there is a correct first name in a string

![Gif: Say my name](/docs/images/myname.gif)

# Introduction

If you are creating chatbots probably you have already asked the name of some user. For instance:

```md
Bot: Hi there, what is your name?  
User: Rafael Pacheco  
Bot: Welcome, Rafael Pacheco. I'm very happy to talk with you.  

Result: 😀👍
```

Note that in this sample the Bot use the user input believing that it's a real and valid name.
However, if the user sends something different than a name the result can be terrible, as shown below:

```md
Bot: Hi there, what is your name?  
User: go F#%K yourself  
Bot: Welcome, go F#%K yourself. I'm very happy to talk with you.  

Result: 😔👎
```

This API was built in order to verify if there are correct first names in a string.

# How to use

Base URL for all endpoints
`https://check-name.herokuapp.com/`

*The response time will likely be a few seconds long on the first request, because this app is running on a free Heroku dyno. Subsequent requests will behave as normal.*

Easiast way:

`curl -i -X GET https://check-name.herokuapp.com/verify/Rafael%20Pacheco`

If you need more details take a look the following links 👇

## Endpoints

[`/verify`](docs/verify.md)
Retrieve the analyze about some name.  
[`/suggest`](docs/suggest.md)
Enable users to suggest any valid name not recognized by this API.

---

By the way, this project is based on:

* **PT-BR** - the last [Brazillian Censo](https://censo2010.ibge.gov.br/) (2010), there are more than 130,000 different first names of people in Brazil. 
The [IBGE](https://www.ibge.gov.br/) is the government institute responsible for this research. [Click here](https://censo2010.ibge.gov.br/nomes) if you want to get all the research database.

* **EN-US** - National Data on the relative frequency of given names in the population of U.S. births where the individual has a Social Security Number. Tabulated based on [Social Security records](https://catalog.data.gov/dataset/baby-names-from-social-security-card-applications-national-level-data) as of March 4, 2018.

**Note:** This API should work for a huge number of names. However, if by some reason it doesn't work properly please submit the name using this endpoint.

# Future work

- [x] Add support to names from other languages.
- [ ] Add support to last names.
- [ ] Suggest similar names.
- [ ] Add names information about frequence rate, popularity, and rank.