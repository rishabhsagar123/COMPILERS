from tkinter import *
from tkinter.filedialog import asksaveasfilename, askopenfilename
from tkinter import messagebox
from tkinter import colorchooser
import subprocess
import webbrowser
import tkinter as tk

compiler = Tk()

compiler.title('PyPal')
w=Label(compiler,text="Copyright By The GamEvolution")
w.pack()


file_path = ''

def color_foreground():
   cp = colorchooser.askcolor()[1]
   Font_tuple = ("Comic Sans MS", 10, "bold")
   editor.configure(font = Font_tuple,foreground=cp,selectbackground="black")
   
def color_background():
   tp = colorchooser.askcolor()[1]
   Font_tuple = ("Comic Sans MS", 10, "bold")
   editor.configure(font = Font_tuple,selectbackground="black",background=tp)

def color_default():
   Font_tuple = ("Comic Sans MS", 10, "bold")
   editor.configure(font = Font_tuple,foreground="red",selectbackground="black",background="white")

   


def set_file_path(path):
    global file_path
    file_path = path


def open_file():
    path = askopenfilename(filetypes=[('Python Files', '*.py')])
    with open(path, 'r') as file:
        code = file.read()
        editor.delete('1.0', END)
        editor.insert('1.0', code)
        set_file_path(path)


def save_as():
    if file_path == '':
        path = asksaveasfilename(filetypes=[('Python Files', '*.py')])
    else:
        path = file_path
    with open(path, 'w') as file:
        code = editor.get('1.0', END)
        file.write(code)
        set_file_path(path)



def run():
    if file_path == '':
      messagebox.showinfo("Alert","Please Save the File First!!")  
      return
       
    command = f'python {file_path}'
    process = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
    output, error = process.communicate()
    code_output.insert('1.0', output)
    code_output.insert('1.0',  error)

def about_section():
   window=tk.Tk()
   window.title('About Us')
   window.geometry('200x150')
   window.configure(background='yellow')
   g=Label(window,text="The GamEvolution is a Software Company Builds PyPal Compiler for Python Language in Python Language",fg="red",bg="white",font=('Aerial',25))
   g.pack()
   link = Label(window, text=" Visit Our Website:- www.gamevolution.in",font=('Helveticabold', 15), fg="red", cursor="hand2")
   link.pack()
   link.bind("<Button-1>", lambda e:
   callback("https://www.gamevolution.in"))  


def feedback_section():
   window=tk.Tk()
   window.title('Feedback')
   window.geometry('200x150')
   window.configure(background='black')
   link = Label(window, text="Click On It And Make Account And Give the Feedback in Our Download Now Section!!",font=('Helveticabold', 15), fg="red", cursor="hand2")
   link.pack()
   link.bind("<Button-1>", lambda e:
   callback("https://gamevolution.in/PyPal%20Compiler/"))

def project_section():
   window=tk.Tk()
   window.title('Python Projects')
   window.geometry('200x150')
   window.configure(background='blue')
   link = Label(window, text="Click on a Link You and Get Source Code of Different Python Projects!!",font=('Helveticabold', 15), fg="red", cursor="hand2")
   link.pack()
   link.bind("<Button-1>", lambda e:
   callback("https://gamevolution.in/PythonProjects/")) 


def version_section():
    messagebox.showinfo("PyPal Version","It's PyPal Version 1.1,Enjoy this Colorful Compiler!!")  
   
def callback(url):
   webbrowser.open_new_tab(url)

menu_bar = Menu(compiler)

file_menu = Menu(menu_bar, tearoff=0)
file_menu.add_command(label='Open', command=open_file)
file_menu.add_command(label='Save', command=save_as)
file_menu.add_command(label='Save As', command=save_as)
menu_bar.add_cascade(label='File', menu=file_menu)

run_bar = Menu(menu_bar, tearoff=0)
run_bar.add_command(label='Run', command=run)
menu_bar.add_cascade(label='Run', menu=run_bar)

color_bar=Menu(menu_bar,tearoff=0)
color_bar.add_command(label='Background', command=color_background)
color_bar.add_command(label='Text', command=color_foreground)
color_bar.add_command(label='Default', command=color_default)
menu_bar.add_cascade(label='Change Color', menu=color_bar)

about_bar=Menu(menu_bar,tearoff=0)
about_bar.add_command(label='About Us',command=about_section)
about_bar.add_command(label='Feedback',command=feedback_section)
about_bar.add_command(label='Python Projects',command=project_section)
about_bar.add_command(label='PyPal Version',command=version_section)
menu_bar.add_cascade(label='Help', menu=about_bar)




compiler.config(menu=menu_bar)


editor = Text()
Font_tuple = ("Comic Sans MS", 10, "bold")
editor.configure(font = Font_tuple,foreground="red",selectbackground="black")
editor.pack()

code_output = Text(height=10)
Fonter_tuple = ("Comic Sans MS", 15, "bold")
code_output.configure(font = Fonter_tuple,foreground="blue") 
code_output.pack()


          



compiler.mainloop()


