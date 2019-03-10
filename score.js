// score.js

var index = 0;
var point_me = 0;
var point_enemy = 0;

function func_a(val)
{
    var table = document.getElementById("score-table");
    // 行を行末に追加
    var row = table.insertRow(-1);
    //td分追加
    var cell_no = row.insertCell(-1);
    var cell_me = row.insertCell(-1);
    var cell_enemy = row.insertCell(-1);

    index++;
    switch (val) {
    case "me-sa":
    case "me-2":
    case "me-3":
    case "me-4":
    case "me-5":
    case "me-6":
        point_me++;
        cell_no.innerHTML = index;
        cell_me.innerHTML = point_me;
        break;
    case "enemy-sa":
    case "enemy-2":
    case "enemy-3":
    case "enemy-4":
    case "enemy-5":
    case "enemy-6":
        point_enemy++;
        cell_no.innerHTML = index;
        cell_enemy.innerHTML = point_enemy;
        break;
    }
}
