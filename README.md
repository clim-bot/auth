# Auth
This is an auth sample app that will have a Go backend and React JS for the frontend.

## Removing cached repo

```bash
git rm --cached your_folder_with_repo
git commit -m "remove cached repo"
git add your_folder_with_repo/
git commit -m "Add folder"
git push
```

## Usage
Run the MailHog:

    ```bash
    docker-compose up --build
    ```

1. The MailHog server will start on `http://localhost:1025`.