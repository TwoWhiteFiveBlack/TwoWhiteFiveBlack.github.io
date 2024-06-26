document.addEventListener('DOMContentLoaded', function() {
    const appendations = [
        "in Spanish",
        "in German",
        "car",
        "new bicycle",
        "on Mars",
        "with a vampire",
        "but cute",
        "in the dark",
        "silently",
        "obituary",
        "on time",
        "mom",
        "in French",
        "in Chinese",
        "at light speed",
        "release date",
        "ratings",
        "free",
        "without money",
        "scam",
        "scandle",
        "while sleeping",
        "tutorial",
        "underground",
        "while falling",
        "dream meaning",
        "on the toilet",
        "translucent",
        "music",
        "meme",
        "easily",
        "expert",
        "secret",
        "phone number",
        "audi",
        "in my tesla",
        "1992",
        "back to the future",
        "over and out",
        "war",
        "dna results",
        "easy way or hard way",
        "overcome",
        "family guy",
        "blue",
        "marriage",
        "heist",
        "north of here",
        "above us",
        "with a giraffe",
        "in a closet",
        "blueberry",
        "on the roof",
        "in a bathtub",
        "indubitably",
        "explosion",
        "taco bell",
        "tiktok",
        "for my husband",
        "for us",
        "more than ever",
        "doctor",
        "drink",
        "sparkly",
        "with my mouth",
        "1992",
        "banana hammock",
    "ninja stars",
    "zebra unicorn",
    "disco ball helmet",
    "space taco",
    "octopus spaceship",
    "penguin rollercoaster",
    "flying toaster",
    "rainbow unicorn",
    "giant rubber duck",
    "magic carpet",
    "time-traveling refrigerator",
    "robotic flamingo",
    "bubble wrap suit",
    "flying spaghetti monster",
    "unicorn ranch",
    "dragon skateboard",
    "alien pineapple",
    "gummy bear army",
    "pirate parrot",
    "jellyfish umbrella",
    "cheeseburger spaceship",
    "trampoline bed",
    "squirrel superhero cape",
    "wizard pogo stick",
    "jellybean waterfall",
    "marshmallow cannon",
    "moonwalking telescope",
    "flying pig",
    "toilet paper crown",
    "banana phone",
    "giant pineapple",
    "disco ball spaceship",
    "singing mermaid",
    "robotic unicorn",
    "pizza cannon",
    "flying rainbow toaster",
    "dragon taco",
    "space llama",
    "candy cane castle",
    "alien ninja turtle",
    "giraffe astronaut",
    "pirate monkey",
    "flying spaghetti elephant",
    "mermaid unicorn",
    "rainbow unicorn fairy",
    "leprechaun astronaut",
    "magic carpet rollercoaster",
    "jellyfish galaxy",
    "space penguin",
    "unicorn ninja",
    "flying piggy bank",
    "zombie unicorn",
    "banana rocket",
    "robotic dragonfly",
    "moonwalking penguin",
    "alien banana",
    "giant rubber chicken",
    "space jellyfish",
    "wizard shark",
    "silly sausage",
    "wacky walrus",
    "laughs-a-lot llama",
    "giggling goblin",
    "jolly jellybean",
    "chuckleberry muffin",
    "giggly gorilla",
    "sneezing sloth",
    "zany zebra",
    "whoopee cushion",
    "goofy grapefruit",
    "giggle-inducing gopher",
    "laughing lemur",
    "guffawing gnome",
    "silliness snail",
    "funny flamingo",
    "laughter-loving leprechaun",
    "chortling chipmunk",
    "giggling gargoyle",
    "nonsense narwhal",
    "mirthful minotaur",
    "guffawing ghost",
    "silliness sausage",
    "laughing lobster",
    "haha hedgehog",
    "laughter-loving llama",
    "chucklehead chicken",
    "silly string",
    "giggling gnome",
    "laugh-a-lot lizard",
    ]
    document.querySelector('#searchQuerySubmit').addEventListener('click', function(event) {
        event.preventDefault();

        const randomIndex = Math.floor(Math.random() * appendations.length);

        var inputField = document.querySelector('#searchQueryInput');
        var spanElement = document.createElement('span');
        spanElement.textContent = appendations[randomIndex];
        spanElement.style.color = "transparent";
        inputField.value = inputField.value.trim() + ' ' + spanElement.textContent;

        setTimeout(function() {
            document.querySelector('form').submit();
        }, 100);
    });
});