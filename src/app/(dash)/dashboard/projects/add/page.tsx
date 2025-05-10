"use client";

import { Formik, Form, Field, FieldArray } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as z from "zod";

// Zod Schema for validation
const projectSchema = z.object({
  featuredImage: z
    .instanceof(File)
    .refine((file) => file.type.startsWith("image/"), {
      message: "Featured image must be an image file",
    }),
  icon: z
    .instanceof(File)
    .refine((file) => file.type.startsWith("image/"), {
      message: "Icon must be an image file",
    }),
  video: z
    .instanceof(File)
    .nullable()
    .refine((file) => !file || file.type.startsWith("video/"), {
      message: "File must be a video",
    }),
  shortDescription: z
    .string()
    .min(10, "Short description must be at least 10 characters")
    .max(100, "Short description cannot exceed 100 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  images: z.array(z.instanceof(File)).min(1, "At least one image is required"),
  textLists: z
    .array(
      z.object({
        title: z.string().min(1, "Title cannot be empty"),
        texts: z
          .array(z.string().min(1, "Text cannot be empty"))
          .min(1, "At least one text is required"),
      })
    )
    .min(1, "At least one text list is required"),
});

// TypeScript Interface for form data
interface ProjectFormData {
  featuredImage: File | null;
  icon: File | null;
  video: File | null;
  shortDescription: string;
  description: string;
  images: File[];
  textLists: { title: string; texts: string[] }[];
}

// Convert Zod validation to Formik
const validateForm = (values: ProjectFormData) => {
  try {
    projectSchema.parse(values);
    return {};
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.formErrors.fieldErrors;
    }
    return {};
  }
};

export default function AddProjectForm() {
  const initialValues: ProjectFormData = {
    featuredImage: null,
    icon: null,
    video: null,
    shortDescription: "",
    description: "",
    images: [],
    textLists: [{ title: "", texts: [""] }],
  };

  return (
    <Card className="max-w- mx-auto my-8">
      <CardHeader>
        <CardTitle>Add New Project</CardTitle>
      </CardHeader>
      <CardContent>
        <Formik
          initialValues={initialValues}
          validate={validateForm}
          onSubmit={(values) => {
            console.log("Form Data:", values);
            // Add logic to send data to API here
          }}
        >
          {({ values, setFieldValue, errors, touched }) => (
            <Form className="space-y-6">
              {/* Featured Image */}
              <div>
                <Label htmlFor="featuredImage">Featured Image</Label>
                <Input
                  id="featuredImage"
                  type="file"
                  accept="image/*"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const file = e.target.files?.[0] || null;
                    setFieldValue("featuredImage", file);
                  }}
                  className="mt-1"
                />
                {errors.featuredImage && touched.featuredImage && (
                  <p className="text-red-500 text-sm mt-1">{errors.featuredImage as string}</p>
                )}
              </div>

              {/* Icon */}
              <div>
                <Label htmlFor="icon">Project Icon</Label>
                <Input
                  id="icon"
                  type="file"
                  accept="image/*"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const file = e.target.files?.[0] || null;
                    setFieldValue("icon", file);
                  }}
                  className="mt-1"
                />
                {errors.icon && touched.icon && (
                  <p className="text-red-500 text-sm mt-1">{errors.icon as string}</p>
                )}
              </div>

              {/* Video */}
              <div>
                <Label htmlFor="video">Project Video</Label>
                <Input
                  id="video"
                  type="file"
                  accept="video/*"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const file = e.target.files?.[0] || null;
                    setFieldValue("video", file);
                  }}
                  className="mt-1"
                />
                {errors.video && touched.video && (
                  <p className="text-red-500 text-sm mt-1">{errors.video as string}</p>
                )}
              </div>

              {/* Short Description */}
              <div>
                <Label htmlFor="shortDescription">Short Description</Label>
                <Field
                  as={Textarea}
                  id="shortDescription"
                  name="shortDescription"
                  className="mt-1"
                  rows={2}
                />
                {errors.shortDescription && touched.shortDescription && (
                  <p className="text-red-500 text-sm mt-1">{errors.shortDescription}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description">Project Description</Label>
                <Field
                  as={Textarea}
                  id="description"
                  name="description"
                  className="mt-1"
                  rows={4}
                />
                {errors.description && touched.description && (
                  <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                )}
              </div>

              {/* Images */}
              <div>
                <Label htmlFor="images">Project Images</Label>
                <Input
                  id="images"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const files = Array.from(e.target.files || []);
                    setFieldValue("images", files);
                  }}
                  className="mt-1"
                />
                {errors.images && touched.images && (
                  <p className="text-red-500 text-sm mt-1">{errors.images as string}</p>
                )}
              </div>

              {/* Text Lists */}
              <FieldArray name="textLists">
                {({ push, remove }) => (
                  <div>
                    <Label>Text Lists</Label>
                    {values.textLists.map((textList, listIndex) => (
                      <div key={listIndex} className="mt-2 border p-4 rounded">
                        <Label>Text List {listIndex + 1}</Label>
                        <div className="mt-2">
                          <Label htmlFor={`textLists.${listIndex}.title`}>List Title</Label>
                          <Field
                            as={Input}
                            name={`textLists.${listIndex}.title`}
                            placeholder="Enter list title"
                            className="mt-1"
                          />
                          {/* @ts-ignore */}
                          {errors.textLists?.[listIndex]?.title &&
                            touched.textLists?.[listIndex]?.title && (
                              <p className="text-red-500 text-sm mt-1">
                                {/* @ts-ignore */}
                                {errors.textLists[listIndex].title}
                              </p>
                            )}
                        </div>
                        <FieldArray name={`textLists.${listIndex}.texts`}>
                          {({ push: pushText, remove: removeText }) => (
                            <div>
                              {textList.texts.map((_, textIndex) => (
                                <div
                                  key={textIndex}
                                  className="flex items-center space-x-2 mt-2"
                                >
                                  <Field
                                    as={Input}
                                    name={`textLists.${listIndex}.texts.${textIndex}`}
                                    placeholder={`Text ${textIndex + 1}`}
                                  />
                                  {textList.texts.length > 1 && (
                                    <Button
                                      type="button"
                                      variant="destructive"
                                      onClick={() => removeText(textIndex)}
                                    >
                                      Delete
                                    </Button>
                                  )}
                                {/* @ts-ignore */}
                                  {errors.textLists?.[listIndex]?.texts?.[textIndex] && touched.textLists?.[listIndex]?.texts?.[textIndex] && (
                                      <p className="text-red-500 text-sm mt-1">
                                        {/* @ts-ignore */}
                                        {errors.textLists[listIndex].texts[textIndex]}
                                      </p>
                                    )}
                                </div>
                              ))}
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => pushText("")}
                                className="mt-2"
                              >
                                Add Text
                              </Button>
                            </div>
                          )}
                        </FieldArray>
                        {values.textLists.length > 1 && (
                          <Button
                            type="button"
                            variant="destructive"
                            onClick={() => remove(listIndex)}
                            className="mt-2"
                          >
                            Delete List
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => push({ title: "", texts: [""] })}
                      className="mt-2"
                    >
                      Add Text List
                    </Button>
                  </div>
                )}
              </FieldArray>

              {/* Submit Button */}
              <Button type="submit" className="w-full">
                Add Project
              </Button>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}