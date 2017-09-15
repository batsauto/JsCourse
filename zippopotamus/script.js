document.addEventListener("DOMContentLoaded", () => {
    // Add your JavaScript here
    const zipBtn = document.getElementById("submitZipCodeInfo");

    zipBtn.addEventListener("click", () => {
        displayZipInfo();
    });


});

function displayZipInfo() {
    zipCodeTextbox = document.getElementById("zipCodeInput");
    xhr = new XMLHttpRequest();
    xhr.open("GET", `http://api.zippopotam.us/us/${zipCodeTextbox.value}`)
    xhr.addEventListener("readystatechange", () => {
        let responseHtml = "";
        if (xhr.readyState === 4 && xhr.status === 200) {
            const zipCodeInfo = JSON.parse(xhr.responseText);
            responseHtml +=
                `<div>
<h3>${zipCodeInfo['places'][0]['place name']}, ${zipCodeInfo['places'][0].state}</h3>

<img src="https://maps.googleapis.com/maps/api/staticmap?center=${zipCodeInfo['places'][0]['place name']}&size=500x400&zoom=13"/>
</div>`

        }
        const mainContent = document.getElementById("mainContent")
        mainContent.innerHTML = responseHtml;

    })

    xhr.send();
    
};
