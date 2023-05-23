<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateItemsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:100|unique:items,name',
            'description' => 'required|string|max:255',
            'price' => 'required|numeric',
            'currency' => 'required|string|max:3',
            'quantity' => 'required|integer',
            'image' => 'required|string|max:255',
            'active' => 'required|boolean',
            'category_id' => 'required|integer|exists:categories,id',
            'brand_id' => 'required|integer|exists:brands,id',            
        ];
    }
}
