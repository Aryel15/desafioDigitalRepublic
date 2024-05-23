describe('Calculando tinta', () => {
  beforeEach(() => {
    cy.visit('https://desafiodigitalrepublic.vercel.app/')  
  })
  
  it('Calcular tinta', () => {

    // Ver Regras
    cy.get('[id="regras"]', { timeout: 2000 }).click()
    cy.wait(1500)
    cy.get('[id="regras"]').click()

    cy.wait(500)

    const largura = Array.from({length: 4})
    const altura = Array.from({length: 4})

    const portas = 1
    const janelas = 2

    // Preeenchendo medidas
    largura.forEach((_, index) =>{
      cy.get(`[id="largura-${index}"]`).type('4')
      cy.wait(500)
    })

    cy.wait(1000)
    altura.forEach((_, index) =>{
      cy.get(`[id="altura-${index}"]`).type('3')
      cy.wait(500)
    })
    
    cy.wait(1000)
    cy.get(`[id="portas-${portas}"]`).type(portas.toString())
    
    cy.wait(1000)
    cy.get(`[id="janelas-${janelas}"]`).type(janelas.toString())


    //Calcular e ver modal
    cy.get('[id="calcular"]').click()
    cy.wait(3000)
    cy.get('[id="close"]').click()
    cy.wait(3000)
    cy.get('[id="resultado"]').click()
    cy.wait(2000)
    cy.get('[id="close"]').click()
    cy.wait(1000)

    // Reiniciar
    cy.get('[id="restart"]').click()
  })

})