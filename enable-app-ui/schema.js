var user =  {
    username : "",
    inventions : ["invention-id"]
}

var user_page = {
    // on-chain data
    username : "",
    inventions : {
        "id" : {
            // invention(s)
            licenses : {
                "oracle-name": "status"
            }
        }
    },
    // off-chain plugins/data
    social_info : {                     // nice-to-have
        avatar : "",
        skills : [""],
        interests: [""],
        following: ["username"]
    }
}

var invention = {
    id : "",
    title : "",
    version : "",
    description : ""
}

var inventions_page = [{
    // invention(s)
    licenses : {
        "oracle-name": "status"
    }
}]

var oracle = {
    org_info : {
        name : ""
    },
    pending_inventions: ["invention-id"],
    approved_inventions: ["invention-id"]
}