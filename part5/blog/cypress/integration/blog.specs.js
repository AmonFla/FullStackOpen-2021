
describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    cy.createUser({ username:'root',name:'System Admin',password:'123456' })
  })

  it('Login form is shown', function() {
    cy.contains('Blog List')
    cy.contains('User')
    cy.contains('Password')
  })

  it('Login success', function() {
    cy.get('#inputUser').type('root')
    cy.get('#inputPassword').type('123456')
    cy.get('#buttonLogin').click()
    cy.contains('Loged user: System Admin')
  })

  it('Login error', function() {
    cy.get('#inputUser').type('noroot')
    cy.get('#inputPassword').type('123456')
    cy.get('#buttonLogin').click()

    cy.get('.error')
      .should('contain','Wrong Credentials')
      .and('have.css', 'color', 'rgb(255, 0, 0)')

    cy.get('html').should('not.contain', 'Loged user: System Admin')
  })

  describe('When Logged on', function(){
    beforeEach(function(){
      cy.login({ username: 'root', password:'123456' })
    })

    it('A blog can be created', function(){
      cy.contains('Create new blog').click()
      cy.get('#inputTitle').type('New entry')
      cy.get('#inputAuthor').type('Flavio Garrido')
      cy.get('#inputUrl').type('http://flaviogarrido.com')
      cy.get('#buttonCreateBlog').click()

      cy.contains('New entry - Flavio Garrido')
    })

    describe('Having multiple entry', function(){
      beforeEach(function(){
        cy.createBlog({ title:'Entrada 1',author: 'Autor 1', url:'http://ruta1.com' })
        cy.createBlog({ title:'Entrada 2',author: 'Autor 2', url:'http://ruta2.com' })
        cy.createBlog({ title:'Entrada 3',author: 'Autor 3', url:'http://ruta3.com' })
      })

      it('A blog can be liked', function(){
        cy.contains('Entrada 1').parent().as('detail')
        cy.get('@detail').contains('view').click()
        cy.get('@detail').contains('like').should('exist')
      })

      it('A blog can be deleted by same user', function(){
        cy.contains('Entrada 1').parent().as('detail')
        cy.get('@detail').contains('view').click()
        cy.get('@detail').contains('remove').should('exist')
      })

      it('A blog can\'t be deleted by other user', function(){
        cy.contains('Logout').click()

        cy.createUser({ username:'root2',name:'System Admin 2',password:'123456' })
        cy.login({ username:'root2',password:'123456' })

        cy.contains('Entrada 1').parent().as('detail')
        cy.get('@detail').contains('view').click()
        cy.get('@detail').contains('remove').should('not.exist')
      })

      it('A blog can\'t be deleted by other user', function(){
        cy.contains('Entrada 1').parent().as('detailBlog1')
        cy.get('@detailBlog1').contains('view').click()
        cy.get('@detailBlog1').contains('like').as('buttonLike1')
        cy.get('@buttonLike1').click()
        cy.get('@detailBlog1').contains('1')
        cy.get('@buttonLike1').click()
        cy.get('@detailBlog1').contains('2')
        cy.get('@buttonLike1').click()


        cy.contains('Entrada 2').parent().as('detailBlog2')
        cy.get('@detailBlog2').contains('view').click()
        cy.get('@detailBlog2').contains('like').as('buttonLike2')
        cy.get('@buttonLike2').click()
        cy.get('@detailBlog2').contains('1')
        cy.get('@buttonLike2').click()
        cy.get('@detailBlog2').contains('2')
        cy.get('@buttonLike2').click()
        cy.get('@detailBlog2').contains('3')
        cy.get('@buttonLike2').click()

        cy.contains('Entrada 3').parent().as('detailBlog3')
        cy.get('@detailBlog3').contains('view').click()
        cy.get('@detailBlog3').contains('like').as('buttonLike3')
        cy.get('@buttonLike3').click()
        cy.get('@detailBlog3').contains('1')

        cy.get('.testBlogList').children('div.blogStyle').then(($div) => {
          // check the correct order between each div element with de correct expected
          cy.wrap($div[0]).contains('Entrada 2').should('exist')
          cy.wrap($div[1]).contains('Entrada 1').should('exist')
          cy.wrap($div[2]).contains('Entrada 3').should('exist')
        })
      })

    })

  })


})