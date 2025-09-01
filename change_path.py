import json
import os

base_img_path = "../"

with open("./products.json", "r") as f:
    products = json.load(f)

file_names = []

for f in os.listdir("."):
    file_names.append(f)



for product in products:
    if [f for f in file_names if f.find(products[product]["code"])!=-1]:
        products[product]["image"] =base_img_path + [f for f in file_names if f.find(products[product]["code"])!=-1][0]

with open("products.json", "w",encoding='utf-8') as f:
    json.dump(products, f, ensure_ascii=False, indent=4)