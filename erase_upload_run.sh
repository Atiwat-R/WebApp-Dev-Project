docker rmi webapp-forum ;
docker build -t webapp-forum . ;
docker run -it --rm -p 8080:8080 webapp-forum
# -it runs container interactively, allowing the use of CTRL+C
# --rm makes it so that the container deletes itself after the process is done

# Working rn:
# docker build -t webapp-forum .
# 