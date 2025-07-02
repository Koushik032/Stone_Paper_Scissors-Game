const choi = document.querySelectorAll(".choice");
const show_msg = document.querySelector(".msg");
const u_score = document.querySelector(".user_score");
const c_score = document.querySelector(".comp_score");

let val1 = 0;
let val2 = 0;

const game_Draw = (user_choice) =>{
    show_msg.innerText = `Match Was Draw! Play Again`;
}

const gen_comp_choice = () =>{
    let options = ["rock", "paper", "Scissors"];
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
}

const playgame = (user_choice) =>{
    const comp_choice = gen_comp_choice();

    if( user_choice === comp_choice ){
            game_Draw(user_choice);
            u_score.innerHTML = val1;
            c_score.innerHTML = val2;
        }else{
            console.log(comp_choice);
            if( user_choice === "rock" ){
                if( comp_choice === "paper" ){
                    show_msg.innerHTML = "You Lost! Rock beats by Paper";
                    val2++;
                    c_score.innerHTML = val2;
                }else{
                    show_msg.innerHTML = "You Win! Rock beats Scissors";
                    val1++;
                    u_score.innerHTML = val1;
                }
            }else if( user_choice === "paper" ){
                if( comp_choice === "Scissors" ){
                    show_msg.innerHTML = "You Lost! Paper beats by Scissors";
                    val2++;
                    c_score.innerHTML = val2;
                }else{
                    show_msg.innerHTML = "You Win! Paper beats Rock";
                    val1++;
                    u_score.innerHTML = val1;
                }
            }else{
                if( comp_choice === "rock" ){
                    show_msg.innerHTML = "You Lost! Scissors beats by Rock";
                    val2++;
                    c_score.innerHTML = val2;
                }else{
                    show_msg.innerHTML = "You Win! Scissors beats Paper";
                    val1++;
                    u_score.innerHTML = val1;
                }
            }
        }
}

choi.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const user_choice = choice.getAttribute("id");
        playgame(user_choice);
    });
});