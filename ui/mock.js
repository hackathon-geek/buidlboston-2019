// on-chain
var inventions = [{
    id : "abc120",
    title : "Prosthertic (Right) Arm for Kids",
    version : "v1",
    description : "Blah Blah Blah Blah"
},
{
    id : "abc121",
    title : "Prosthertic (Left) Arm for Kids",
    version : "v1",
    description : "Blah Blah Blah Blah"
},
{
    id : "abc122",
    title : "Prosthertic (Right) Leg for Kids",
    version : "v1",
    description : "Blah Blah Blah Blah"
},
{
    id : "abc123",
    title : "Prosthertic (Right) Leg for Kids",
    version : "v1",
    description : "Blah Blah Blah Blah"
}];
var users = [
    {
        username : "qatfish",
        inventions : ["abc120", "abc122", "abc123"]
    },
    {
        username : "awesome_guy",
        inventions : ["abc121"]
    }
];
var oracles = [
    {
        org_info : {
            name : "fda"
        },
        pending_inventions: ["abc120", "abc123"],
        approved_inventions: ["abc121", "abc122"]
    },
    {
        org_info : {
            name : "eu"
        },
        pending_inventions: ["abc120"],
        approved_inventions: ["abc121", "abc122"]
    }
];

var user_page = {
    username: users[0].username,
    inventions: {
        "abc120" : {
            title: inventions[0].title,
            version: inventions[0].version,
            description: inventions[0].description,
            licenses : {
                "fda" : oracles[0].inventions["abc120"],
                "eu" : oracles[1].inventions["abc120"],
            }
        },
        "abc122" : {
            title: inventions[2].title,
            version: inventions[2].version,
            description: inventions[2].description,
            licenses : {
                "fda" : oracles[0].inventions["abc122"],
                "eu" : oracles[1].inventions["abc122"],
            }
        },
        "abc123" : {
            title: inventions[3].title,
            version: inventions[3].version,
            description: inventions[3].description,
            licenses : {
                "fda" : oracles[0].inventions["abc123"],
                "eu" : oracles[1].inventions["abc123"],
            }
        }
    },
    // off-chain plugins/data
    social_info : {
        avatar : "data:image/png;base64,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",
        skills : ["js", "java", "go"],
        interests: ["poverty", "education", "disability"],
        following: [users[1].username]
    }
};

var inventions_page = [
    {
        id : inventions[0].id,
        title : inventions[0].title,
        version : inventions[0].version,
        description : inventions[0].description,
        licenses : {
            "fda" : "pending",
            "eu" : "pending"
        }
    },
    {
        id : inventions[1].id,
        title : inventions[1].title,
        version : inventions[1].version,
        description : inventions[1].description,
        licenses : {
            "fda" : "approved",
            "eu" : "approved"
        }
    },
    {
        id : inventions[2].id,
        title : inventions[2].title,
        version : inventions[2].version,
        description : inventions[2].description,
        licenses : {
            "fda" : "pending",
            "eu" : "approved"
        }
    },
    {
        id : inventions[3].id,
        title : inventions[3].title,
        version : inventions[3].version,
        description : inventions[3].description,
        licenses : {
            "fda" : "approved"
        }
    }
];

var oracle_page = {
    org_info : {
        name : "fda"
    },
    inventions : {
        "abc120" : {
            title : inventions[0].title,
            version : inventions[0].version,
            description : inventions[0].description,
            status: "pending"
        },
        "abc121" : {
            title : inventions[1].title,
            version : inventions[1].version,
            description : inventions[1].description,
            status: "approved"
        },
        "abc122" : {
            title : inventions[2].title,
            version : inventions[2].version,
            description : inventions[2].description,
            status: "pending"
        },
        "abc123" : {
            title : inventions[3].title,
            version : inventions[3].version,
            description : inventions[3].description,
            status: "approved"
        }
    }
};