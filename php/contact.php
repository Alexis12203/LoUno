<?php
if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])){
	$name = htmlentities($_POST['name']);
	$email = htmlentities($_POST['email']);
	$sujet = "Contact YOUR-NAME";
	$message = htmlentities($_POST['message']);
	$contenu = '<html><head><title>Title of E-mail</title></head><body>';
	$contenu .= '<p>Hello, you received an e-mail from your website.</p>';
	$contenu .= '<p><strong>Name</strong>: '.$name.'</p>';
	$contenu .= '<p><strong>E-mail</strong>: '.$email.'</p>';
	$contenu .= '<p><strong>Message</strong>: '.$message.'</p>';
	$contenu .= '</body></html>'; // Contenu du message de l'email (en XHTML)

	$headers = 'MIME-Version: 1.0'."\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1'."\r\n";

	mail('test@test.com', $sujet, $contenu, $headers);
	header('location:index.html?#contact_social');
} else {

	header('location:index.html?#contact_social');
}
?>