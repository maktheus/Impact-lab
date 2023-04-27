from PIL import Image

# Abre o arquivo JPEG
with Image.open('/home/impact-18/uchoa/Impact-lab/front-end/índice.jpeg') as img:
    # Obtém o raw data da imagem
    raw_data = img.tobytes()
    
# Exibe o raw data da imagem
print(raw_data)
