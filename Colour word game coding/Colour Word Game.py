import tkinter 
import random 
colours = ['Red','Blue','Green','Pink','Black','Gold','Yellow','Orange','White','Purple','Brown'] 
score = 0
timeleft = 60 
def startGame(event): 
    if timeleft == 60: 
        countdown()  
    nextColour() 
  
def nextColour():  
    global score 
    global timeleft 
    if timeleft > 0: 
        e.focus_set() 
        if e.get().lower() == colours[1].lower(): 
            score += 1 
        e.delete(0, tkinter.END) 
          
        random.shuffle(colours)
        label.config(fg = str(colours[1]), text = str(colours[0])) 
        scoreLabel.config(text = "Score: " + str(score))  
def countdown():  
    global timeleft 
    if timeleft > 0: 
        timeleft -= 1
        timeLabel.config(text = "Time left: "+ str(timeleft))  
        timeLabel.after(1000, countdown) 
root = tkinter.Tk()  
root.title("Word GAME") 
root.geometry("600x400") 
instructions = tkinter.Label(root, text = "Type in the colour of the words, and not the word text!", font = ('Monotype Corsiva', 20)) 
instructions.pack()  
scoreLabel = tkinter.Label(root, text = "Press enter to start",font = ('Script MT Bold', 30)) 
scoreLabel.pack() 
timeLabel = tkinter.Label(root, text = "Time left: " +str(timeleft), font = ('Brush Script MT', 20)) 
timeLabel.pack() 
label = tkinter.Label(root, font = ('Algerian', 100)) 
label.pack() 
e = tkinter.Entry(root) 
root.bind('<Return>', startGame) 
e.pack()  
e.focus_set() 
root.mainloop() 
