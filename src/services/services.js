import {
  del,
  get,
  getWithExportFile,
  post,
  postAsForm,
  put,
  putAsForm,
} from "helpers/api_helper";

const getToken = () => {
  const localData = JSON.parse(localStorage.getItem("authUser"));
  const token = localData?.token;
  return token;

}

export const adminLogin = (data) => {
  return post("/admin/login", data);
};

export const adminDashboardListing = (search, page, floor, activeCard) => {
  // let obj = JSON.parse(localStorage.getItem("authUser"));
  const localData = JSON.parse(localStorage.getItem("authUser"));
  const token = localData?.token;
  return get(`/admin/getPictures?pageNumber=${page}&search=${search}&hall=${floor}&wall=${activeCard}`,
    {
      headers: { Authorization: token },
    }
  );
};

export const viewAnItem = (id) => {
  const token = getToken();
  return get(`/admin/getSinglePhoto?photo_id=${id}`,
    {
      headers: { Authorization: token }
    }
  )
}

export const addAnItem = (data) => {
  const token = getToken();
  console.log(token,"token")
  return postAsForm("/admin/addphoto",
    data,
    {
      headers: { 
        Authorization: token,
        'content-type': 'multipart/form-data'
      }
    }
  )
}

export const editAnItem = (data) => {
  const token = getToken();
  return putAsForm("/admin/updatephoto",
    data,
    {
      headers: {
        Authorization: token,
        'content-type': 'multipart/form-data'
      },
    }
  )
}

export const changePassword = (data) => {
  const token = getToken()
  return post("/admin/changePassword",
    
      data
    ,
    {
      headers:{Authorization : token}
    }
  )
}

