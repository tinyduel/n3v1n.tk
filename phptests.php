$text = $_get[title]
$myfile = fopen("chat.txt", "r")
fwrite($myfile, $txt);
echo $text
