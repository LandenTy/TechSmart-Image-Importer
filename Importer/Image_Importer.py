"""
Image_Importer

Description:
"""
import pygame,sys
pygame.init()

# Window
w,h = (1366,768)
win = pygame.display.set_mode([w,h])
clock = pygame.time.Clock()

# Color List
colors = []

#Drawing
def draw(surface,colors):
    c = -1
    for y in range(surface.get_height()):
        for x in range(surface.get_width()):
            if c < (x * y):
                c += 1
                
            pygame.draw.rect(win,colors[c],pygame.Rect(x,y,1,1))
            pygame.display.flip()

img = pygame.Surface([179,179])
draw(img,colors)

# Game Loop
while True:
    clock.tick(60)
    for e in pygame.event.get():
        if e.type == pygame.QUIT:
            print(clock.get_fps())
            sys.exit()
