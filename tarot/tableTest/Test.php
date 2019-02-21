<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="test.css" />
    <script src="main.js"></script>
</head>
<body>
      <h1 style='text-align:center;'> Clientes registrados en base de datos</h1>
      <div>
        <div style='text-align:center; ' class='here'>
          
          <table role="table">
              <thead role="rowgroup">
                <tr role="row">
                  <th role="columnheader">Nombre completo</th>
                  <th role="columnheader">Edad</th>
                  <th role="columnheader">Teléfono</th>
                  <th role="columnheader">Correo</th>
                  <th role="columnheader">Website</th>
                  <th role="columnheader">Profesión</th>
                  <th role="columnheader">Estado</th>
                  <th role="columnheader">Ciudad</th>
                  <th role="columnheader">Sexo</th>
                  <th role="columnheader">País</th>
                  
                </tr>
              </thead>
              <tbody role="rowgroup">
              <?php
                $db = mysqli_connect('localhost', 'root', '', 'letsphp');
                $sql = 'SELECT * FROM clientes';
                $result = mysqli_query($db, $sql);
                // Now printing

                foreach($result as $x){
                  printf('<tr>
                  <td> %s %s </td>
                  <td> %s </td>
                  <td> %s </td>
                  <td> %s </td>
                  <td> %s </td>
                  <td> %s </td>
                  <td> %s </td>
                  <td> %s </td>
                  <td> %s </td>
                  <td> %s </td>
                  </tr>',
                    $x['nombre'],
                    $x['apellido'],
                    $x['edad'],
                    $x['telefono'],
                    $x['correo'],
                    $x['website'],
                    $x['profesion'],
                    $x['estado'],
                    $x['ciudad'],
                    $x['sexo'],
                    $x['country']);
                }

              ?>
              </tbody>
          </table>
        </div>  
      </div>
</body>
</html>