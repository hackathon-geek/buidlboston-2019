var serverUrl = "http://localhost:3000";

var notificationPanel = $("#notification_panel");

var newInventorUsernameTextbox = $("#new_inventor_username");
var newInventorRegisterButton = $("#new_inventor_register");
newInventorRegisterButton.on('click', () => {
    
    notificationPanel.html("");
    $.ajax({
        type: "POST",
        url: serverUrl + "/inventor",
        contentType: "application/json; charset=utf-8",
        data: {
            "username": "singla"
        },
        success: (obj) => {
            console.log(obj);
            notificationPanel.html("Successfully created inventor!");
        },
        dataType: "json"
    });
});

var inventionsTbody = $("#inventions > table > tbody");

var getInventions = function() {
    inventionsTbody.html(
        `<tr>
            <th scope="row">INV123</th>
            <td>Title goes here</td>
            <td>Version goes here</td>
            <td>Descscscsc</td>
            <td>inventor goes here</td>
        </tr>`
    );
}