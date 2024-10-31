function registerClub() {
    const nombre_club = document.getElementById('nombre_club').value;
    const colores_club = document.getElementById('colores_club').value;
    const mail_club = document.getElementById('mail_club').value;
    const contraseña_club = document.getElementById('contraseña_club').value;
    const confirmar_contraseña = document.getElementById('confirmar_contraseña').value;

    // Validación de contraseña
    if (contraseña_club !== confirmar_contraseña) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Crear el objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Configurar la solicitud POST
    xhr.open('POST', 'http://localhost:3000/api/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Manejar la respuesta de la solicitud
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            const response = JSON.parse(xhr.responseText);

            if (xhr.status === 201) {
                alert(response.message);
                document.getElementById('registration-form').reset();
            } else {
                alert(response.error || 'Error en la solicitud.');
            }
        }
    };

    // Enviar los datos en formato JSON
    const data = JSON.stringify({ nombre_club, colores_club, mail_club, contraseña_club });
    xhr.send(data);
}