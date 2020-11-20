
# Gerando um build para o deploy no GitHub Pages:
    ng build --prod --base-href "https://work-dev-br.github.io/work-dev-web/"

# Deployando no GitHub Pages:
    ngh --branch=gh-pages

# URL do site publicado no GitHub Pages:
    https://work-dev-br.github.io/work-dev-web/


# INSTALAÇÃO INICIAL DO GH-PAGES:
# ==============================

# Instalar o gh-pages:
    ng add angular-cli-ghpages

# Alterar no angular.json:
    "outputPath": "dist/work-dev-web",
#   para
    "outputPath": "dist",
