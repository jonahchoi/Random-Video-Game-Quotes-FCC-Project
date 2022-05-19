const randomQuotes = [
{
  quote: "Praise the sun!",
  author: "Solaire of Astora, Dark Souls",
  image: "https://www.teahub.io/photos/full/98-984675_dark-souls-solaire-gif.jpg" },

{
  quote: "We stand upon the precipice of change. The world fears the inevitable plummet into the abyss. Watch for that moment… and when it comes, do not hesitate to leap. It is only when you fall that you learn whether you can fly",
  author: "Hawke, Dragon Age II",
  image: "https://wallpapercave.com/wp/qccVLtF.jpg" },

{
  quote: "Stand amongst the ashes of a trillion dead souls and ask the ghosts if honor matters. The silence is your answer.",
  author: "Javik, Mass Effect 3",
  image: "https://wallpaperaccess.com/full/208156.jpg" },

{
  quote: "Shadow and light are two sides of the same coin. One cannot exist without the other.",
  author: "Zelda, The Legend of Zelda: Twilight Princess",
  image: "https://w.wallha.com/ws/8/gtoAQlmv.jpg" },

{
  quote: "You can’t break a man the way you break a dog or a horse. The harder you beat a man, the taller he stands.",
  author: "The Jackal, Far Cry 2",
  image: "https://media.moddb.com/images/downloads/1/25/24050/sunset-hunt_wide.jpg" },

{
  quote: "Hope is what makes us strong. It is why we are here. It is what we fight with when all else is lost.",
  author: "Pandora, God of War III",
  image: "https://c4.wallpaperflare.com/wallpaper/852/188/43/god-of-war-god-of-war-iii-kratos-god-of-war-wallpaper-preview.jpg" },

{
  quote: "What is better? To be born good or to overcome your evil nature through great effort?",
  author: "Paarthunax, Skyrim",
  image: "https://wallpapercave.com/wp/wp2942560.jpg" },

{
  quote: "The right man in the wrong place can make all the difference in the world.",
  author: "G-Man, Half-Life 2",
  image: "https://images.alphacoders.com/105/thumb-1920-1053010.jpg" },

{
  quote: "Nobody knows what's gonna happen at the end of the line, so you might as well enjoy the trip.",
  author: 'Manuel "Manny" Calavera, Grim Fandango',
  image: "https://www.metroweekly.com/wp-content/uploads/2015/02/grim-fandango-remastered-wallpaper-artwork-is-wicked-1.jpg" },

{
  quote: "Remember those who have passed, and they will forever live on",
  author: "Sein, Ori and the Blind Forest",
  image: "https://cdn.wallpapersafari.com/17/89/2FjS7s.jpg" },

{
  quote: "Excellence isn't an art, it's a habit. We are what we repeatedly do.",
  author: "The Edge, Furi",
  image: "https://pbs.twimg.com/media/Eh9rtpGXgAY8Ro1.jpg" },

{
  quote: "Part of growing up is doing what's best for the people you care about, even if sometimes, that means hurting someone else.",
  author: "Lee Everett, The Walking Dead",
  image: "https://i.imgur.com/6zUsw7C.jpg" }];



function getRandomQuote() {
  let randomIndex = Math.floor(Math.random() * randomQuotes.length);
  return randomQuotes[randomIndex];
}

function assignQuote() {
  let randomQuote = getRandomQuote();
  let singleQuote = randomQuote.quote;
  let singleAuthor = randomQuote.author;
  let backgroundImg = randomQuote.image;
  $("#text").text('"' + singleQuote + '"');
  $("#author").text("-" + singleAuthor);
  $("body").css("background-image", "url(" + backgroundImg + ")");
  $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?text=" + singleQuote + " -" + singleAuthor);
}

$(document).ready(function () {
  assignQuote();

  $("#new-quote").on("click", assignQuote);
});