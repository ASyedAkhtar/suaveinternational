class Person    {
    constructor(minecraftName, discordName, socialType, socialName, ageGroup, info){
        this.minecraftName = minecraftName;
        this.discordName = discordName;
        this.socialType = socialType;
        this.socialName = socialName;
        this.ageGroup = ageGroup;
        this.info = info;
    }
}

function onSubmit(e)    {
    const applicant = new Person(document.querySelector('#minecraftName').value,
            document.querySelector('#discordName').value,
            document.querySelector(document.getElementById("reddit").checked ? '#reddit' : '#twitter').value,
            document.querySelector('#socialName').value,
            document.querySelector('#ageGroup option:checked').value,
            document.querySelector('#information').value);
    // e.preventDefault();
}

document.querySelector('.form').addEventListener('submit', onSubmit);