"""
Image_Importer

Description:
"""
import pygame,sys,math
pygame.init()

# Window
w,h = (1366,768)
win = pygame.display.set_mode([w,h])
clock = pygame.time.Clock()

# Color List
img1_data = []

#Drawing
def draw(surface,colors):
    for j in range(len(colors)):
        x = round(j % surface.get_width())
        y = round(math.floor(j / surface.get_width()))
        rgbValue = colors[j]
        
        pygame.draw.rect(win,rgbValue,pygame.Rect(x,y,1,1))
        pygame.display.flip()

img = pygame.Surface([317,184])    
img.fill((0,0,0))

draw(img,img1_data)

# Game Loop
while True:
    clock.tick(60)
    for e in pygame.event.get():
        if e.type == pygame.QUIT:
            print(clock.get_fps())
            sys.exit()
