import { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { getUserAuth } from "../store/user";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, postsRef } from "../firebase";

const PostModal = ({ onExit }) => {
  const user = useSelector(getUserAuth());
  const [text, setText] = useState("");
  const [sharedImage, setSharedImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState("");
  const [progress, setProgress] = useState("");

  const handlePost = () => {
    if (!assetArea && !text) {
      return;
    }

    const postBody = {
      avatarUrl: user.photoURL,
      author: user.displayName,
      info: "LinkedIn member",
      date: serverTimestamp(),
      description: text,
      media: {},
    };

    if (!assetArea) {
      addDoc(postsRef, postBody);
    } else if (videoLink) {
      postBody.media.videoURL = videoLink;
      addDoc(postsRef, postBody);
    } else if (sharedImage) {
      const storageRef = ref(storage, `/files/${sharedImage}`);
      const uploadTask = uploadBytesResumable(storageRef, sharedImage);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const currentProgeess = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          setProgress(currentProgeess);
        },
        (err) => alert(err.message),
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((result) => {
              postBody.media.imageURL = result;
              addDoc(postsRef, postBody);
            })
            .catch((err) => alert(err.message));
        }
      );
    }

    setTimeout(onExit, 1500);
  };

  const handleChange = (e) => {
    const image = e.currentTarget.files[0];

    if (!image) {
      alert("Please select an image.");
      return;
    }

    setSharedImage(image);
  };

  const switchAssetArea = (area) => {
    setSharedImage("");
    setVideoLink("");
    setAssetArea(area);
  };

  const handleReset = () => {
    setText("");
    setSharedImage("");
    setVideoLink("");
    setAssetArea("");
  };

  const handleEscClick = (e) => {
    if (e.key === "Escape") {
      onExit();
    }
  };

  return (
    <Container onKeyDown={handleEscClick}>
      <Content>
        <Header>
          <h2>Create a post</h2>
          <button onClick={() => onExit()}>
            <img src="/assets/close-icon.svg" alt="" />
          </button>
        </Header>

        <SharedContent>
          <UserInfo>
            <img
              src={user?.photoURL || "/assets/user.svg"}
              alt={user?.dispalyName || "user"}
            />
            <span>{user.displayName || "User"}</span>
          </UserInfo>

          <Editor>
            <textarea
              value={text}
              onChange={(e) => setText(e.currentTarget.value)}
              placeholder="What do you want to talk about?"
              autoFocus
            />

            {assetArea === "image" ? (
              <UploadImage>
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg, image/gif"
                  name="image"
                  id="file"
                  style={{ display: "none" }}
                  onChange={handleChange}
                />

                {sharedImage && (
                  <img src={URL.createObjectURL(sharedImage)} alt="post" />
                )}
              </UploadImage>
            ) : (
              assetArea === "media" && (
                <UploadVideo>
                  <input
                    id="video"
                    type="text"
                    placeholder="Embed a video link"
                    vlaue={videoLink}
                    onChange={(e) => setVideoLink(e.currentTarget.value)}
                  />

                  {videoLink && (
                    <ReactPlayer
                      width="100%"
                      url={videoLink}
                      onError={() => setVideoLink("")}
                      playing
                    />
                  )}
                </UploadVideo>
              )
            )}
          </Editor>
        </SharedContent>

        <SharedCreation>
          <AttachAssets>
            <AssetButton onClick={() => switchAssetArea("image")}>
              <label htmlFor="file">
                <img src="/assets/share-image.svg" alt="" />
              </label>
            </AssetButton>

            <AssetButton onClick={() => switchAssetArea("media")}>
              <label htmlFor="video">
                <img src="/assets/share-video.svg" alt="" />
              </label>
            </AssetButton>
          </AttachAssets>

          <ShareComment>
            <AssetButton>
              <img src="/assets/share-comment.svg" alt="" />
              Anyone
            </AssetButton>
          </ShareComment>

          {progress ? (
            <UploadStatus>Sending post... {progress || 0}%</UploadStatus>
          ) : (
            <ButtonGroup>
              <ResetButton onClick={handleReset}>Reset</ResetButton>
              <PostButton onClick={handlePost}>Post</PostButton>
            </ButtonGroup>
          )}
        </SharedCreation>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  color: #000;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: #fff;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;

  @media screen and (max-width: 540px) {
    top: 0;
    height: 100%;
    max-height: 100%;
    border-radius: 0;
  }
`;

const Header = styled.header`
  display: block;
  padding: 0 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    color: rgba(0, 0, 0, 0.6);

    svg {
      pointer-events: none;
    }
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;

  svg,
  img {
    width: 40px;
    height: 40px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }

  span {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    margin-left: 7px;
  }
`;

const SharedCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
`;

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
  transition-duration: 167ms;

  label {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const AttachAssets = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;

  ${AssetButton} {
    width: 40px;
  }
`;

const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);

  ${AssetButton} {
    img {
      margin-right: 5px;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ResetButton = styled.button`
  padding: 0 24px;
  border-radius: 25px;
`;

const PostButton = styled.button`
  color: #fff !important;
  background-color: #0a66c2;
  padding: 0 24px;
  border-radius: 25px;
`;

const UploadStatus = styled.p`
  margin: auto;
  margin-right: 0;
  font-size: 14px;
`;

const Editor = styled.div`
  padding: 12px 24px;

  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
  }

  input {
    width: 100%;
    height: 35px;
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
`;

const UploadImage = styled.div`
  text-align: center;

  img {
    width: 100%;
  }
`;

const UploadVideo = styled.div``;

export default PostModal;
