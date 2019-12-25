var clean = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],                    
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
var board = clean;
var ran = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var ranpos;
var cluecount = 0;
var arrval = [];                                                             
var arrpos = [];
var counter = 0;
var templevel = 0;
var clean_pos = [];
var reset_activation_bool = false;
var clean_pos = []
var level_num = 0; 
var clue_active = "0";
var fn = 1;
var bug = false;
var pass= 1;


function boardCheck(ranNum, a, b) {

    // <!-- this is array position map -->                <!-- this is block position map -->
    // 
    // 00 01 02   03 04 05   06 07 08                         1 1 1   2 2 2   3 3 3 
    // 10 11 12   13 14 15   16 17 18                         1 1 1   2 2 2   3 3 3 
    // 20 21 22   23 24 25   26 27 28                         1 1 1   2 2 2   3 3 3 
    //                                                             
    // 30 31 32   33 34 35   36 37 38                         4 4 4   5 5 5   6 6 6 
    // 40 41 42   43 44 45   46 47 48                         4 4 4   5 5 5   6 6 6 
    // 50 51 52   53 54 55   56 57 58                         4 4 4   5 5 5   6 6 6 
    //
    // 60 61 62   63 64 65   66 67 68                         7 7 7   8 8 8   9 9 9 
    // 70 71 72   73 74 75   76 77 78                         7 7 7   8 8 8   9 9 9 
    // 80 81 82   83 84 85   86 87 88                         7 7 7   8 8 8   9 9 9
    // 


    let bool = true;                                 
    switch (a + "" + b) {
        case "00": case "01": case "02": case "10": case "11": case "12": case "20": case "21": case "22":          
            for (i = 0; i < 3; i++) {
                for (j = 0; j < 3; j++) {
                    if (board[i][j] == ranNum) {
                        bool = false;
                        break;
                    }
                }
            }
            break;
        case "03": case "04": case "05": case "13": case "14": case "15": case "23": case "24": case "25":        
            for (i = 0; i < 3; i++) {
                for (j = 3; j < 6; j++) {
                    if (board[i][j] == ranNum) {
                        bool = false;
                        break;
                    }
                }
            }
            break;
        case "06": case "07": case "08": case "16": case "17": case "18": case "26": case "27": case "28":        
            for (i = 0; i < 3; i++) {
                for (j = 6; j < 9; j++) {
                    if (board[i][j] == ranNum) {
                        bool = false;
                        break;
                    }
                }
            }
            break;
        case "30": case "31": case "32": case "40": case "41": case "42": case "50": case "51": case "52":        
            for (i = 3; i < 6; i++) {
                for (j = 0; j < 3; j++) {
                    if (board[i][j] == ranNum) {
                        bool = false;
                        break;
                    }
                }
            }
            break;
        case "33": case "34": case "35": case "43": case "44": case "45": case "53": case "54": case "55":      
            for (i = 3; i < 6; i++) {
                for (j = 3; j < 6; j++) {
                    if (board[i][j] == ranNum) {
                        bool = false;
                        break;
                    }
                }
            }
            break;
        case "36": case "37": case "38": case "46": case "47": case "48": case "56": case "57": case "58":  
            for (i = 3; i < 6; i++) {
                for (j = 6; j < 9; j++) {
                    if (board[i][j] == ranNum) {
                        bool = false;
                        break;
                    }
                }
            }
            break;
        case "60": case "61": case "62": case "70": case "71": case "72": case "80": case "81": case "82":          
            for (i = 6; i < 9; i++) {
                for (j = 0; j < 3; j++) {
                    if (board[i][j] == ranNum) {
                        bool = false;
                        break;
                    }
                }
            }
            break;
        case "63": case "64": case "65": case "73": case "74": case "75": case "83": case "84": case "85":          
            for (i = 6; i < 9; i++) {
                for (j = 3; j < 6; j++) {
                    if (board[i][j] == ranNum) {
                        bool = false;
                        break;
                    }
                }
            }
            break;
        case "66": case "67": case "68": case "76": case "77": case "78": case "86": case "87": case "88":         
            for (i = 6; i < 9; i++) {
                for (j = 6; j < 9; j++) {
                    if (board[i][j] == ranNum) {
                        bool = false;
                        break;
                    }
                }
            }
            break;
    }

    for (i = 0; i < 9; i++) {
        if (board[a][i] == ranNum) {             
            bool = false;
            break;
        }

        if (board[i][b] == ranNum) {             
            bool = false;
            break;
        }
    }
    reset_activation_bool = true;              
    return bool;
}

function shuffle(array) {                    

    let counter = array.length;

    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        // console.log(index)
        counter--;

        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

function boardcreation() {          
    cluecount = 0;                        
    for (k = 0; k < 9; k++) {
        ran = shuffle(ran);
        for (m = 0; m < 9; m++) {

            for (n = 0; n < ran.length; n++) {
                if (boardCheck(ran[n], k, m, board) == true) {
                    board[k][m] = ran[n];
                    break;
                }

                if (board[k][m] == 0 && n == ran.length - 1) {
                    ran = shuffle(ran);
                    for (i = 0; i < ran.length; i++) { board[k][i] = 0; }
                    m = -1;
                }
                counter++;
            }
            if (counter > 1500) {                                          
                for (i = 0; i < board.length; i++) {                         
                    for (j = 0; j < board.length; j++) {
                        board[i][j] = 0;
                    }
                }
                k = -1;
                counter = 0;
                break;
            }
        }
    }
}


function boardcreate() {                             
    arrval = [];
    for (i = 0; i < board.length; i++) {
        for (j = 0; j < board[i].length; j++) {
            document.getElementById(i + "" + j).value = board[i][j];
            document.getElementById(i + "" + j).disabled = true;
            document.getElementById(i + "" + j).style.backgroundColor = "#58b469";
            arrpos.push(i + "" + j)
            arrval.push(board[i][j]);
        }
    }

}


function level(num) {                    
    clue_active = true;                   
    level_num = num; 
    var clean_pos = []
    templevel = num;
    board = clean;
    boardcreation();
    cluecount = 0;
    arrpos = [];
    boardcreate();
    ranpos = shuffle(arrpos);
    for (o = 0; o < num; o++) {
        document.getElementById(ranpos[o]).disabled = false;
        document.getElementById(ranpos[o]).value = "";
        document.getElementById(ranpos[o]).style.backgroundColor = "white"
        clean_pos.push(ranpos[o])
    }
}



function userdiff() {                      
    clue_active = true;
    boardcreation();
    let chose = prompt("how much block to remove? (4 - 80)")
    if (chose < 81 && chose > 3) {
        level(chose);
    } else {
        alert(" please enter value betwin 4 - 80")
    }

}


function clue() {                          
    if (clue_active === "0") {
        alert("please choose a level or castum difficut")
    } else {
        if (clue_active == true) {
            cluecount++;
            if (cluecount <= 3) {
                let arr_positon = ranpos[cluecount].charAt(0);
                let col_positon = ranpos[cluecount].charAt(1);
                document.getElementById(arr_positon + "" + col_positon).value = board[arr_positon][col_positon];
            } else {
                alert("think on your own!")
            }
        } else {
            alert("no clue after check - please choose a level or new board for new clue")
        }
    }


}


function board_reset() {                   
    if (reset_activation_bool) {
        cluecount = 0;
        boardcreate();

        for (i = 0; i < board.length; i++) {
            for (j = 0; j < board[i].length; j++) {
                document.getElementById(i + "" + j).value = board[i][j];
                document.getElementById(i + "" + j).disabled = true;
                document.getElementById(i + "" + j).style.backgroundColor = "#58b469";
            }
        }

        for (i = 0; i < templevel; i++) {
            let v = ranpos[i].charAt(0);
            let x = ranpos[i].charAt(1);
            document.getElementById(v + "" + x).value = "";
            document.getElementById(v + "" + x).style.backgroundColor = "white";
            document.getElementById(v + "" + x).disabled = false;
        }
    }else{ 
        alert("pick a level at first")
    }
   
}

function newboard() {  
    clue_active = true;
    if (templevel == 0) {
        level(20)
    } else {
        level(templevel);
    }
}


function doKeyUpValidation(text) { 
    if(text.value == "" ||
        text.value == "1" ||
        text.value == "2" ||
        text.value == "3" ||
        text.value == "4" ||
        text.value == "5" ||
        text.value == "6" ||
        text.value == "7" ||
        text.value == "8" ||
        text.value == "9")   { 
    } else { 
        text.value = "";
        alert("only numbers 1 - 9")
    }
}




function check() {     
    clue_active = false;
    let counter = 0;
    for (y = 0; y < level_num; y++) { 
        let temp = document.getElementById(ranpos[y]).value;   
        board[Number(ranpos[y].charAt(0))][Number(ranpos[y].charAt(1))] = 0   
        if(boardCheck(temp, ranpos[y].charAt(0), ranpos[y].charAt(1))) {
            document.getElementById(ranpos[y]).style.backgroundColor = "#BADCC0";
            counter++;                                                              
        }else{                                                                       
            document.getElementById(ranpos[y]).style.backgroundColor = "#D97575";
              
        }   
    }
    if(counter == level_num) { 
        alert("W O W - you are ginus")
    }
}

function hell() {
    document.getElementById("banner").style.display = "none";
    document.getElementById("level").style.display = "none";
    document.getElementById("reg").style.display = "none";
    document.getElementById("form").style.display = "none";
    document.getElementById("ad1").style.display = "block";
    document.getElementById("ad2").style.display = "block";
    level(20);
    alert("you can sign-in in user icon below... ")
}

function haven(){ 
    document.getElementById("banner").style.display = "none";
    document.getElementById("reg").style.display = "none";
    document.getElementById("form").style.display = "none";
    document.getElementById("ad1").style.display = "none";
    document.getElementById("ad2").style.display = "none";
    document.getElementById("level").style.display = "block";
}

function reg() { 
    document.getElementById("banner").style.display = "none";
    document.getElementById("reg").style.display = "block";
    document.getElementById("form").style.display = "none";
}

function page() {
    if (alert_active == 5) {
        alert("You are all-ready sign in")
    } else{
       document.getElementById("banner").style.display = "none";
    document.getElementById("reg").style.display = "none";
    document.getElementById("form").style.display = "block"; 
    }
    
}
var alert_active
function vaild() {  
    alert_active = 0; 
    let tempAlert = "";
    fn = document.getElementById("namee").value; 
    let lastName = document.getElementById("lastName").value;
    pass = document.getElementById("pass").value;
    let passVaild = document.getElementById("passVaild").value;
    let phone = document.getElementById("phone").value;
    let id = document.getElementById("id").value;
    
    if(fn != "") {   
         if(fn.indexOf(" ") != -1) { 
            document.getElementById("namee").style.backgroundColor = "rgb(197, 125, 125)" 
            tempAlert += "Name have no space \n ";
        }else { 
            document.getElementById("namee").style.backgroundColor = "#58B469"
            document.getElementById("namee").style.Color = "white"
            document.getElementById("namee").disabled = true;
            alert_active++;
        }
    }else{
        tempAlert += "First name is empty \n"
        document.getElementById("namee").style.backgroundColor = "rgb(197, 125, 125)"; 
    }
       
    if(lastName != "") { 
       if(lastName.indexOf(" ") != -1) {  
            document.getElementById("lastName").style.backgroundColor = "rgb(197, 125, 125)"
            tempAlert += "Last name have no space \n"
        }else { 
            document.getElementById("lastName").style.backgroundColor = "#58B469"
            document.getElementById("lastName").style.Color = "white"
            document.getElementById("lastName").disabled = true;
            alert_active++;
        } 
    }else { 
        tempAlert += "Last name is empty \n"
        document.getElementById("lastName").style.backgroundColor = "rgb(197, 125, 125)";
    }
        

    if (pass.length < 5) { 
        tempAlert += "PassWord must be at least 5 charts \n"
        document.getElementById("pass").style.backgroundColor = "rgb(197, 125, 125)"
    }else { 
        if(pass == passVaild) {
            document.getElementById("pass").style.backgroundColor = "#58B469"
            document.getElementById("pass").style.Color = "white"
            document.getElementById("pass").disabled = true; 
            document.getElementById("passVaild").style.backgroundColor = "#58B469"
            document.getElementById("passVaild").style.Color = "white"
            document.getElementById("passVaild").disabled = true;  
            alert_active++; 
        }else { 
            document.getElementById("pass").style.backgroundColor = "rgb(197, 125, 125)"
            document.getElementById("passVaild").style.backgroundColor = "rgb(197, 125, 125)"
            tempAlert += "Password dont much \n"
        }    
    }

    if (phone.length == 10){
        if(phone % 1){
            tempAlert += "Phone Number not legal \n"
            document.getElementById("phone").style.backgroundColor = "rgb(197, 125, 125)"
        }else{ 
            document.getElementById("phone").style.backgroundColor = "#58B469"
            document.getElementById("phone").style.Color = "white"
            document.getElementById("phone").disabled = true;  
            alert_active++;
        }

    }else{ 
        tempAlert+= "Phone number is to short \n";
        document.getElementById("phone").style.backgroundColor = "rgb(197, 125, 125)"
    }

    if (id.length == 9){ 
        if(id % 1){
            tempAlert += "Id is not legal \n"
            document.getElementById("id").style.backgroundColor = "rgb(197, 125, 125)"
        }else{ 
            document.getElementById("id").style.backgroundColor = "#58B469"
            document.getElementById("id").style.Color = "white"
            document.getElementById("id").disabled = true;  
            alert_active++;

        }

    }else{ 
        tempAlert+= "Id number is to short \n";
        document.getElementById("id").style.backgroundColor = "rgb(197, 125, 125)"
    }
    if(bug == false) { 
        if (alert_active == 5) {
            alert("register copmlited - good luck and have fun")
            document.getElementById("namee").value = "";
            document.getElementById("lastName").value = "";
            document.getElementById("pass").value = "";
            document.getElementById("passVaild").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("id").value = "";
            document.getElementById("namee").disabled = false;
            document.getElementById("lastName").disabled = false;
            document.getElementById("pass").disabled = false;
            document.getElementById("passVaild").disabled = false;
            document.getElementById("phone").disabled = false;
            document.getElementById("id").disabled = false;
            document.getElementById("namee").disabled = false;
            document.getElementById("lastName").style.backgroundColor = "white"
            document.getElementById("pass").style.backgroundColor = "white"
            document.getElementById("passVaild").style.backgroundColor = "white"
            document.getElementById("phone").style.backgroundColor = "white"
            document.getElementById("id").style.backgroundColor = "white"
            bug = true;
            reg(); 
        } else {
            alert(tempAlert);
        }

    }else { 
        alert("You are all-ready sign-in \npleae conect to get more...")  
        reg();
    }
}

function enterVaild() { 
    console.log(fn)
    console.log(pass)

    if(document.getElementById("userNameValid").value == fn && document.getElementById("passWordValid").value == pass ) { 
        document.getElementById("userNameValid").style.backgroundColor = "white"
        document.getElementById("passWordValid").style.backgroundColor = "white"
        haven();
    }else{ 
        alert("Username or password is worng")
    }
}












