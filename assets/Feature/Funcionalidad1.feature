Feature: Autenticación de Usuarios
  Como usuario de SIMAP, quiero iniciar y cerrar sesión de forma segura
  para poder acceder a las herramientas operativas y de monitoreo.

  Scenario: 01 - Inicio de Sesión Exitoso
    Given el usuario se encuentra en la pantalla de inicio de sesión
    And el usuario introduce un "correo válido" y una "contraseña >= 6 caracteres"
    When el usuario presiona el botón "Iniciar Sesión"
    Then el sistema muestra la alerta "¡Inicio de sesión exitoso! Redirigiendo..."
    And el sistema redirige al "Dashboard Principal" después de 1.5 segundos

  Scenario: 02 - Inicio de Sesión Fallido por Credenciales Incorrectas
    Given el usuario se encuentra en la pantalla de inicio de sesión
    And el usuario introduce un "correo inválido" o una "contraseña incorrecta"
    When el usuario presiona el botón "Iniciar Sesión"
    Then el sistema muestra la alerta "Error: Credenciales incorrectas. Por favor, inténtelo de nuevo."

 Scenario: 03 - Recordar Email al Recargar la Página
    Given el usuario ha marcado la casilla "Recordarme"
    And ha iniciado sesión correctamente
    When el usuario cierra y vuelve a abrir la aplicación (recarga la página)
    Then el campo "Correo Electrónico" debe estar pre-llenado con el email del usuario