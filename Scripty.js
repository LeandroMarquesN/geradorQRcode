function GerarQrcode() {
    var inputUsuario = document.querySelector('textarea').value;

    var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chld=h&chl='
    var ConteudoQRcode = GoogleChartAPI + encodeURI(inputUsuario);
    document.querySelector('#QRcodeImage').src = ConteudoQRcode
}