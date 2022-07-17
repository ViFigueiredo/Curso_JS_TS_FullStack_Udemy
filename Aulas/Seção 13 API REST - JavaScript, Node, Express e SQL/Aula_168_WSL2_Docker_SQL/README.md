### INSTALAR DOCKER NATIVO NO WSL2 ###

Atualização de pacotes do repositório Linux
```
sudo apt update -y
sudo apt upgrade -y
```

Instale alguns pacotes que deixam o apt usar pacotes pelo HTTPS
```
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
```

Adicione a chave GPG para o repositório oficial do Docker
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Adicione o repositório do Docker às fontes do APT
```
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
```

Atualize e instale o Docker do repositório recém adicionado
```
sudo apt update
sudo apt install docker-ce -y
```

Verificando se está tudo ok
```
sudo service docker start
sudo service docker status
```

Iniciando o Docker automaticamente com o boot do WSL2
```
sudo touch /etc/wsl.conf
echo -e "[boot] \n command = service docker start" >> /etc/wsl.conf
```

Reinicie o Docker - Powershell
```
wsl --shutdown
wsl -l -v
```

Verificando status e informações do Docker instalado
```
sudo service docker status
docker version
```

Utilizando o Docker sem SUDO
```
sudo usermod -aG docker ${USER}
su - ${USER}
```

### INSTALAR IMAGEM DOCKER DO MARIADB ###
```
docker pull mariadb
docker run --name=mariadb -e MYSQL_ROOT_PASSWORD=<SENHA ROOT> -e MYSQL_DATABASE=<BANCO> -p 3306:3306 -d mariadb
```

### INSTALAR O DBEAVER E INSOMNIA
https://dbeaver.io/files/dbeaver-ce-latest-x86_64-setup.exe

https://updates.insomnia.rest/downloads/windows/latest?app=com.insomnia.app&source=website

