Feature: Gestión Operativa (Monitoreo, Despliegue y Recursos)
  Como comandante, quiero monitorear unidades y gestionar recursos humanos
  para optimizar la respuesta en campo.

  Scenario: 07 - Mostrar Sección de Gestión de Equipos
    Given la sección "Gestión Operativa" está activa
    When el usuario hace clic en el enlace "Gestión de Equipos y Usuarios"
    Then el contenido principal se actualiza para mostrar la subsección "Gestión de Recursos Humanos y Comunicación"
    And el enlace "Gestión de Equipos y Usuarios" en el sidebar se marca como activo 

  Scenario: 08 - Despliegue del Botón de Emergencia (HU14)
    Given el usuario está en la subsección "Monitoreo y Despliegue"
    When la sección se carga
    Then el "Botón de Emergencia" debe estar visible 
    And el botón de emergencia desaparece al cambiar a otra subsección (ej. "Inteligencia y Reportes")

  Scenario: 09 - Tarjeta de Rendimiento con Advertencia
    Given el usuario está en la subsección "Gestión de Equipos y Usuarios"
    When el sistema detecta que una métrica (ej. "Falsas Alarmas") es crítica
    Then la tarjeta "Falsas Alarmas (Mes)" debe tener un borde superior de color amarillo (`.performance-card.warning`)

  Scenario: 10 - Módulo de Carga de Evidencia (HU7)
    Given el usuario está en la subsección "Monitoreo y Despliegue"
    Then el área de carga de evidencia  debe tener un borde discontinuo de color verde'

