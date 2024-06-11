describe('drag and drop', () => {
    it('test 1', () => {
        cy.visit('https://v1.training-support.net/selenium/drag-drop')
        //which:1--->left button of mouse
        //which:2--->centre button of mouse
        //which:3--->right button of mouse
        cy.get('#draggable').trigger('mousedown',{which:1})//-->it will click the ball to drag
        cy.get("#droppable").trigger('mousemove').trigger('mouseup', {force:true})
        //-->mouse move will drag the ball to the left drop box
        cy.get('#dropzone2').trigger('mousemove').trigger('mouseup',{force:true})
        //-->mouse move will drag the ball to the right drop box
    });
});