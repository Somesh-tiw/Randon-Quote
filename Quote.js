// const Dice=document.querySelector('.dice')
const button=document.querySelector('button')
const heading=document.querySelector('#heading')
const para=document.querySelector('p')


console.log(button)
console.log(heading)

const DiceBox=[
    {
        id : 1,
        content:"Dream big, work hard, stay focused, and surround yourself with good people. Success comes to those who never stop believing in their potential."
    },
    {
        id : 2,
        content:"Life’s challenges are not meant to break you but to mold you into the person you’re destined to become. Embrace growth through adversity."
    },
    {
        id : 3,
        content:"Happiness is not found in perfection, but in appreciating the beauty of life’s imperfections. Every moment holds its own kind of magic."
    },
    {
        id : 4,
        content:"Opportunities don’t just happen; you create them with determination, persistence, and a fearless heart ready to chase the impossible."
    },
    {
        id : 5,
        content:"Courage is not the absence of fear but the triumph over it. Face your fears; they’re stepping stones to greatness."
    },
    {
        id : 6,
        content:"Kindness is the simplest yet most powerful way to leave a lasting impact. It costs nothing but enriches everything it touches."
    },
]

randomQuote=()=>{
   let random=Math.floor(Math.random()*5)
   console.log(DiceBox[random].content)
   heading.innerText=DiceBox[random].content
   p.innerText="Advise#"+DiceBox[random].id
}
button.addEventListener("click",randomQuote)