import requests
import re
import os

code = [
    "716",
    "15",
    "34",
    "77",
    "196",
    "200",
    "721",
    "622",
    "68",
    "624",
    "439",
    "621",
    "188",
    "37",
    "72",
    "206",
    "464",
    "374",
    "375",
    "354",
    "48",
    "566",
    "355",
    "610",
    "65",
    "312",
    "376",
    "215",
    "264",
    "551",
    "656",
    "504",
    "564",
    "64",
    "205",
    "547",
    "456",
    "528",
    "463",
    "470",
    "471",
    "289",
    "520",
    "71",
    "36",
    "27",
    "26",
    "207",
    "51",
    "651",
    "664",
    "560",
    "69",
    "187",
    "557",
    "554",
    "558",
    "556",
    "555",
    "559",
    "561",
    "612",
    "618",
    "22",
    "61",
    "63",
    "238",
    "284",
    "646",
    "647",
    "640",
    "641",
    "40",
    "67",
    "70",
    "318",
    "28",
    "633",
    "643",
    "644"
]

for id_prod in code:
    try:
        req  = requests.get("https://www.foreverliving.fr/FR/fr/product-detail/" + id_prod)
        
        if(req.status_code==200):
            img = re.findall("<img .*?>",req.text)

        product_images = [(i.replace("src=","")).replace("\"","") for i in re.findall("src=\".*?\""," ".join([ i for i in img if i.find("products")!=-1])) if i.find("products")!=-1]

        for img_link in product_images:
            try:
                response = requests.get(img_link, stream=True)
                response.raise_for_status() # Raise an exception for bad status codes (4xx or 5xx)
                print(img_link.split("/"))
                filename = os.path.join('.',img_link.split("/")[-1])

                with open(filename, 'wb') as f:
                    for chunk in response.iter_content(chunk_size=8192):
                        f.write(chunk)
                print(f"Image '{filename}' downloaded successfully.")

            except Exception as e:
                print(f"Error downloading image: {e}")

    except Exception as e:
        print(f"Error : {e}")