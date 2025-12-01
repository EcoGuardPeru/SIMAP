Feature: Sistema de Alertas y Monitoreo (HU11)
  Como operador, quiero visualizar las alertas clasificadas por tipo y prioridad
  para poder enfocar la atención en eventos críticos.

  Scenario: 04 - Acceso al Módulo de Alertas
    Given el usuario está en el Dashboard Principal
    When el usuario hace clic en la tarjeta "SISTEMA DE ALERTAS" 
    Then la sección "Sistema de Alertas" se muestra en pantalla

  Scenario: 05 - Identificación Visual de Alerta Roja (Alta)
    Given la sección "Sistema de Alertas" está activa
    And el sistema muestra una "Alerta de Deforestación" con Prioridad Alta
    Then la tarjeta de la alerta debe tener un borde lateral de color rojo
    And el tag de prioridad debe usar el color de alerta 

  Scenario: 06 - Aplicación de Filtro por Tipo de Alerta
    Given el usuario está viendo las "Alertas Activas"
    When el usuario selecciona "Tipo de Alerta: Incendio" en el filtro
    Then la lista de "Alertas Activas" se actualiza para mostrar solo las alertas de incendio 