var player = prompt('pilih :  gunting, batu, kertas');
var computer = Math.random();
if(computer < 0.34) {
    computer ='gunting';
} else if (computer >= 0.34 && computer < 0.67) {
    computer ='batu';
} else {
    computer='kertas';
}
var hasil = '';
if( player == computer ) {
    hasil='menjawab sama dengan computer dan hasilnya seri';
} else if (player === 'gunting') {
    hasil=(computer == 'kertas') ? 'sangat hebat dan jawaban anda benar' : 'nub sekali';
} else if (player === 'batu') {
    hasil=(computer == 'gunting') ? 'sangat hebat dan jawaban anda benar' : 'nub sekali';
} else if (player === 'kertas') {
    hasil=(computer == 'batu') ? 'sangat hebat dan jawaban anda benar' : 'nub sekali'; 
} else {
    hasil='anda salah memasukan';
}

alert('Kamu memilih ' + player + ' dan komputer memilih ' + computer  + ' \nkamu ' + hasil );
