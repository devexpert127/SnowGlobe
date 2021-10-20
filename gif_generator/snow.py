from PIL import Image
import pygame
import glob
import os
from random import choice
import random
import json
import math       

# pygame.init()
 
WHITE = [255, 255, 255]
PINK  = [255, 192, 203]
GOLD = [255, 215, 0]
CHRISTMAS = [255, 0, 0]

colors = [WHITE, PINK, GOLD, CHRISTMAS]
colorstr = ['White', 'Pink', 'Gold', 'Christmas']
# colors = [CHRISTMAS]
# colorstr = ['Christmas']

jsonlist = [
    'QmWEyqnk8ceiYt9NUFm17PEhTdRjr2BHifB4ueWHmWuEP4',
    'QmV4PRN2CHVwe5eq5BbdwuSFbcV3zAjzuw3y6AifCYwbqm',
    'QmUCmBXxAf1W1yCGXLeiW3AKmkJdm8vhQxCpJXG7ud2SRe',
    'QmYYma9oxDEz8phU2dUfhzq47Bu3DXSPxgkR8Aj3YUhJAg',
    'QmSE3TF3xyiHinnwBz5qkg8H3ZXVtn7crmV9MnVDwGW3Z4',
    'QmZwzQHirTKjtb6Ye7gqGAStGViuF5XQY1pQZXDmA7AvMt',
    'QmXtABDJybXXSRbaSBqtw6VUJ7pHTz9FBarhbVAZGchkDM',
    'QmeMJZTzX3n2G8CP5SZFhECfqTnku2MWVEjUB3KqojqU3P',
]

SIZE = [600, 400]
 
# screen = pygame.display.set_mode(SIZE)
 
snowFall_back = []
snowRadius_back = []
for i in range(300):
    x = random.randrange(0, 600)
    y = random.randrange(0, 400)
    r = random.randrange(2, 5)
    snowFall_back.append([x, y])
    snowRadius_back.append(r)
snowFall_front = []
snowRadius_front = []
for i in range(300):
    x = random.randrange(0, 600)
    y = random.randrange(0, 400)
    r = random.randrange(2, 5)
    snowFall_front.append([x, y])    
    snowRadius_front.append(r)
 
clock = pygame.time.Clock()
done = False

gifcnt = 1
jsonfilename = []
for i in range(1, 7841):
    jsonfilename.append(i)

random.shuffle(jsonfilename)
print(jsonfilename)

backgrounds = glob.glob("./gif_generator/Background/*.png")
themes = glob.glob("./gif_generator/theme/*.png")
geolocations = glob.glob('./gif_generator/geolocation/*.png')
# imgglobe = pygame.image.load(r'./gif_generator/Globe/1mm.png')

# qualites = ['1.0mm']
qualites = ['1.0mm', '1.5mm', '2.0mm', '2.5mm', '3.0mm', '3.5mm', '4.0mm']

for geolocation in geolocations:
    # imggeolocation = pygame.image.load(geolocation)

    for background in backgrounds:
        # imgbackground = pygame.image.load(background)

        for theme in themes:
            # imgtheme = pygame.image.load(theme)

            for quality in qualites:
                for color in colors:
                    cnt = 0

                    # for i in range(100):
                    #     screen.blit(imgbackground, (0, 0))
                    #     for event in pygame.event.get(): 
                    #         if event.type == pygame.QUIT: 
                    #             done = True
                    #     for i in range(len(snowFall_back)):
                    #         pygame.draw.circle(screen, color, snowFall_back[i], snowRadius_back[i])
                    
                    #         snowFall_back[i][1] += 1
                    #         if snowFall_back[i][1] > 400:
                    #             y = random.randrange(-50, -10)
                    #             snowFall_back[i][1] = y
                            
                    #             x = random.randrange(0, 600)
                    #             snowFall_back[i][0] = x
                    

                    #     screen.blit(imgtheme, (0, 0))
                    #     screen.blit(imgglobe, (0, 0))
                    #     screen.blit(imggeolocation, (0, 0))

                    #     for i in range(len(snowFall_front)):
                    #         r = random.randrange(3, 6)
                    #         pygame.draw.circle(screen, color, snowFall_front[i], snowRadius_front[i])
                    
                    #         snowFall_front[i][1] += 1
                    #         if snowFall_front[i][1] > 400:
                    #             y = random.randrange(-50, -10)
                    #             snowFall_front[i][1] = y
                            
                    #             x = random.randrange(0, 600)
                    #             snowFall_front[i][0] = x

                    #     pygame.display.flip()

                    #     # if cnt < 10:
                    #     #     pygame.image.save(screen, f"screenshot00{cnt}.png")
                    #     # elif cnt < 100:
                    #     #     pygame.image.save(screen, f"screenshot0{cnt}.png")
                    #     # else:
                    #     #     pygame.image.save(screen, f"screenshot{cnt}.png")
                    #     cnt += 1

                    # frames = []
                    # imgs = glob.glob("*.png")
                    # for i in imgs:
                    #     new_frame = Image.open(i)
                    #     frames.append(new_frame)

                    # # Save into a GIF file that loops forever
                    # frames[0].save(f'gifs/{gifcnt}.gif', format='GIF',
                    #                 append_images=frames[1:],
                    #                 save_all=True,
                    #                 duration=20, loop=0)

                    # Data to be written
                    city = geolocation[geolocation.find('\\') + 1 : geolocation.find('.png')]
                    if (city == 'New York' or  city == 'Syracuse' or city == 'California' or city == 'Utah' or city == 'Alaska'):
                        city = 'USA: ' + city
                    elif (city == 'Montreal'):
                        city = 'Canada: ' + city
                    elif (city == 'Chamonix'):
                        city = 'France: ' + city
                    elif (city == 'Augsburg'):
                        city = 'Germany: ' + city
                    elif (city == 'Cairngorms'):
                        city = 'Scotland: ' + city
                    elif (city == 'Toyama' or city == 'Sapporo' or city == 'Nagano'):
                        city = 'Japan: ' + city
                    elif (city == 'Appenzell Alps'):
                        city = 'Switzerland: ' + city
                    elif (city == 'Warth-Schrocken'):
                        city = 'Austria: ' + city

                    dictionary ={
                        "id":1,
                        "name":f"SnowGlobeNFT #{jsonfilename[gifcnt - 1]}",
                        "image":"https://snowglobes.mypinata.cloud/ipfs/" + jsonlist[math.floor((gifcnt - 1) / 1000)] + f"/{gifcnt}.gif",
                        "description":"My SnowGlobe Collection Descriptions",
                        "attributes":[
                            {
                                "trait_type":"GLOBE_QUALITY",
                                "value":quality
                            },
                            {
                                "trait_type":"Background",
                                "value": background[background.find('\\') + 1 : background.find('.png')]
                            },
                            {
                                "trait_type":"FALLING_SNOW",
                                "value": colorstr[colors.index(color)]
                            },
                            {
                                "trait_type":"THEME",
                                "value":theme[theme.find('\\') + 1 : theme.find('.png')]
                            },
                            {
                                "trait_type":"GEO_LOCATION",
                                "value":city
                            },
                        ]
                    }
                    
                    # Serializing json 
                    json_object = json.dumps(dictionary, indent = 4)
                    
                    # Writing to sample.json
                    with open(f"jsons/{jsonfilename[gifcnt - 1]}.json", "w") as outfile:
                        outfile.write(json_object)

                    gifcnt = gifcnt + 1
                    # for i in imgs:
                    #     os.remove(i)

pygame.quit()