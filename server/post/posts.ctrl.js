import Post from '../models/post.js';
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

export const checkObjectId = (req, res, next) => {
   const { id } = req.params;
   if (!ObjectId.isValid(id)) {
      res.status(400).json({ message: 'Hey, you. Bad Request!' }); // Bad Request
      return;
   }
   return next();
};
 
export const write = async (req, res) => {
   const { title, body, tags } = req.body;
   const post = new Post({
      title,
      body,
      tags,
   });
   try {
      await post.save();
      res.json(post);
   } catch (e) {
      res.status(500).json(e);
   }
};

export const list = async (req, res) => {
   try {
      const posts = await Post.find()
      .sort({ _id: -1 })
      .exec();
      res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
};



export const read = async (req, res) => {
   const { id } = req.params;
   try {
      const post = await Post.findById(id).exec();
      if (!post) {
         res.status(404).json({ message: 'Hey, you. Not Found!' }); // Not Found
         return;
      }
      res.json(post);
   } catch (e) {
      res.status(500).json(e);
   }
};



export const remove = async (req, res) => {
   const { id } = req.params;
   try {
      await Post.findByIdAndRemove(id).exec();
      res.status(204).json({ message: 'Hey, you. No Content!' }); // No Content (성공하기는 했지만 응답할 데이터는 없음)
   } catch (e) {
      res.status(500).json(e);
   }
};



export const update = async (req, res) => {
   const { id } = req.params;
   try {
      const post = await Post.findByIdAndUpdate(id, req.body, {
        new: true, // 이 값을 설정하면 업데이트된 데이터를 반환합니다.
        // false일 때는 업데이트되기 전의 데이터를 반환합니다.
      }).exec();
      if (!post) {
         res.status(404).json({ message: 'Hey, you. Not Found!' });
        return;
      }
      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
};