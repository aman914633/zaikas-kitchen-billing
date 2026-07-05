.quickButtons{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:10px;
    margin-top:20px;
}

.quickButtons button{
    background:#1976d2;
    color:white;
    border:none;
    border-radius:10px;
    padding:14px;
    font-size:18px;
    font-weight:bold;
    cursor:pointer;
}

.changeBox{
    margin-top:20px;
    background:#fff8f0;
    border:2px solid #ffb366;
    border-radius:10px;
    padding:15px;
    text-align:center;
}

.changeBox h3{
    color:#0a8f2d;
    font-size:24px;
}

.actionButtons{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:12px;
    margin-top:20px;
}

.completeBtn{
    background:#28a745;
    color:white;
    border:none;
    border-radius:10px;
    padding:15px;
    font-size:18px;
    font-weight:bold;
}

.newBtn{
    background:#dc3545;
    color:white;
    border:none;
    border-radius:10px;
    padding:15px;
    font-size:18px;
    font-weight:bold;
}

button{
    transition:.2s;
}

button:active{
    transform:scale(.96);
}

footer{
    text-align:center;
    padding:20px;
    color:#777;
}

@media(max-width:600px){

.menuGrid{
grid-template-columns:1fr;
}

.header h1{
font-size:26px;
}

.row{
font-size:20px;
}

}
